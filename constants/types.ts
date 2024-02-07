export enum JobTypes {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Contractor = "Contractor"
}

export type ValueOf<T> = T[keyof T]
