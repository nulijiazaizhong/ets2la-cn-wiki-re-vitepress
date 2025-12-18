import path from "node:path";
import fs from "node:fs";

const DIR_PATH = path.resolve();
const WHITE_LIST: readonly string[] = [
  "index.md",
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
  "version",
  "agreement.md",
];

const FOLDER_MAP: Record<string, string> = {
  "base": "基础",
  "advanced": "高级",
  "bug": "问题",
  "mobile": "移动设备访问"
};

const SORT_ORDER: Record<string, number> = {
  "base": 1,
  "advanced": 2,
  "bug": 3,
  "install.md": 10,
  "use.md": 20,
  "plugins.md": 30,
  "page.md": 40
};

const COLLAPSED_FOLDERS = ["advanced", "bug"];

type SidebarItemEx = {
  text: string;
  link?: string;
  items?: SidebarItemEx[];
  collapsed?: boolean;
};

const isDirectory = (p: string): boolean => fs.lstatSync(p).isDirectory();

const intersections = (arr1: string[], arr2: string[]): string[] =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

const getTitleFromMarkdown = (fp: string): string | null => {
  try {
    const content = fs.readFileSync(fp, "utf-8");
    const m = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
    if (!m) return null;
    const fm = m[1];
    const line = fm.split(/\r?\n/).find((l) => /^\s*title:\s*/.test(l));
    if (!line) return null;
    const raw = line.replace(/^\s*title:\s*/, "").trim();
    return raw.replace(/^['"]|['"]$/g, "");
  } catch {
    return null;
  }
};

function getList(params: string[], path1: string, pathname: string): SidebarItemEx[] {
  // Sort params based on SORT_ORDER
  params.sort((a, b) => {
    const orderA = SORT_ORDER[a] || 100;
    const orderB = SORT_ORDER[b] || 100;
    if (orderA !== orderB) return orderA - orderB;
    return a.localeCompare(b);
  });

  const res: SidebarItemEx[] = [];
  for (let file of params) {
    const dir = path.join(path1, file);
    const isDir = isDirectory(dir);
    // Ensure pathname doesn't end with a slash before appending
    const nextPathname = pathname.endsWith('/') ? `${pathname}${file}` : `${pathname}/${file}`;
    
    if (isDir) {
      const files = fs.readdirSync(dir);
      const idx = path.join(dir, "index.md");
      // Use mapped name if available, otherwise try markdown title or fallback to filename
      const groupTitle = FOLDER_MAP[file] || (fs.existsSync(idx) && !isDirectory(idx) ? getTitleFromMarkdown(idx) || file : file);
      
      const isCollapsed = COLLAPSED_FOLDERS.includes(file);

      res.push({
        text: groupTitle,
        collapsed: isCollapsed,
        items: getList(files, dir, nextPathname),
      });
    } else {
      const name = path.basename(file);
      const suffix = path.extname(file);
      if (suffix !== ".md") {
        continue;
      }
      const title = getTitleFromMarkdown(dir) || name;
      res.push({
        text: title,
        link: nextPathname,
      });
    }
  }
  return res;
}

export const set_sidebar = (pathname: string): SidebarItemEx[] => {
  const dirPath = path.join(DIR_PATH, pathname);
  const files = fs.readdirSync(dirPath);
  const items = intersections(files, WHITE_LIST as string[]);
  return getList(items, dirPath, pathname);
};
