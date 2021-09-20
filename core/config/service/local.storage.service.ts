
export interface ILocalStorageService {
  service: any,
  set: (key: string, value: string) => void;
  get: (key: string) => Promise<string>;
}