import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const revalidate = 3600; // Cache for 1 hour to prevent GitHub rate limits

export async function GET() {
  try {
    const res = await fetch('https://api.github.com/users/Prathamesh-Jadhav04/repos?sort=pushed&per_page=100', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // 'User-Agent': 'Portfolio-App'
      },
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const repos = await res.json();

    // 1. Calculate latest commit 'hours ago'
    let hoursAgo = 2; // default fallback
    if (repos.length > 0) {
      const latestPush = new Date(repos[0].pushed_at);
      const now = new Date();
      const diffMs = now.getTime() - latestPush.getTime();
      hoursAgo = Math.floor(diffMs / (1000 * 60 * 60));
    }

    // 2. Map repos to project format
    // Filter out forks if desired, or keep them. Let's filter out forks to only show original projects
    const originalRepos = repos.filter((r: any) => !r.fork);

    // Sort by stars and then by recency (though API already sorted by pushed, let's prioritize high-impact projects)
    const sortedRepos = originalRepos.sort((a: any, b: any) => {
      // Pin NuroSearch and DPI Engine to top if possible
      const aPinned = a.name.includes("NuroSearch") || a.name.includes("DPI") ? 1 : 0;
      const bPinned = b.name.includes("NuroSearch") || b.name.includes("DPI") ? 1 : 0;
      if (aPinned !== bPinned) return bPinned - aPinned;
      return b.stargazers_count - a.stargazers_count;
    });

    // 1.5 Read hiddenProjects and projectOverrides from local data
    let hiddenProjects: string[] = [];
    let projectOverrides: Record<string, any> = {};
    try {
      const dataFilePath = path.join(process.cwd(), 'lib', 'data.json');
      const fileContents = fs.readFileSync(dataFilePath, 'utf8');
      const localData = JSON.parse(fileContents);
      hiddenProjects = localData.hiddenProjects || [];
      projectOverrides = localData.projectOverrides || {};
    } catch (e) {
      console.warn("Could not read local data", e);
    }

    const formattedProjects = sortedRepos.map((repo: any) => {
      const repoName = repo.name;
      const overrides = projectOverrides[repoName] || {};
      
      return {
        repoName: repoName, // Keep raw name for admin identification
        isHidden: hiddenProjects.includes(repoName),
        title: overrides.title || repoName.replace(/-/g, ' '),
        desc: overrides.desc || repo.description || "No description provided.",
        tech: overrides.tech || repo.language || "Multiple",
        github: repo.html_url,
        demo: repo.homepage || null
      };
    });

    return NextResponse.json({
      hoursAgo,
      projects: formattedProjects
    });

  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    // Fallback data if GitHub rate limit is hit
    return NextResponse.json({
      hoursAgo: 2,
      projects: []
    }, { status: 500 });
  }
}
