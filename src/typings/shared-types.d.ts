export type UserDetailsType =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

export interface Site {
  name: string;
  key: string;
  siteCode?: string;
}
