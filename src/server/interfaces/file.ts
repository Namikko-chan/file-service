import { FileFormData, } from '../storages';

export interface IFileGuid {
  id: string;
}

export interface IFilename {
  name: string;
  ext: string;
}

export interface IFileCreatePayload {
  file?: FileFormData;
}

export interface IFileEditPayload {
  public?: boolean;
  name?: string;
}

export type IFileResponse = 
  IFileGuid &
  IFilename & {
    mime: string;
    size: number;
    public: boolean;
    userId: string;
    hash: string;
  };