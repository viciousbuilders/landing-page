export type Builder = {
  name: string;
  github: string;
  site: string;
};

export const builders: Builder[] = [
  { name: "Bach Tran", github: "Theskrtnerd", site: "https://theskrtnerd.github.io" },
  { name: "Elvis Tran", github: "elvistranhere", site: "https://elvis-tran.is-a.dev" },
  { name: "Trung Do", github: "DoTRung1023", site: "https://github.com/DoTRung1023" },
  { name: "TNT57", github: "TNT57", site: "https://github.com/TNT57" },
  { name: "Minh Nguyen", github: "nguyenhoangminh1106", site: "https://github.com/nguyenhoangminh1106" },
];

export const builderByGithub = new Map(builders.map((b) => [b.github, b]));

export function avatarUrl(github: string) {
  return `https://avatars.githubusercontent.com/${github}?s=192`;
}
