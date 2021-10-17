export class Repository {
  constructor(
    public name: string,
    public description: string,
    public clone_url: string,
    public created_at: Date
) { }
}
