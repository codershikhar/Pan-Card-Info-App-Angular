export interface IPanInfo {
  id: number;
  pan_file: IFile;
  full_name: string;
  fathers_name: string;
  date_of_birth: Date;
  pan_number: string;
  scanned_signature: string;
  photo: string;
  created_on: Date;
  updated_on: Date;
}

export interface IFile {
  id: number;
  file: string;
  created_on: Date;
  updated_on: Date;
}
