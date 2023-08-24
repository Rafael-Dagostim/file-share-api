export abstract class DocumentBaseEntity {
  /**
   * Row id.
   */
  public id: string;

  /**
   * Creation date of row.
   */
  public createdAt: Date;

  /**
   * Last update date.
   */
  public updatedAt: Date;

  /**
   * Date when row was "soft-deleted" (if not null).
   */
  public deletedAt: Date | null;

  public constructor(partial: Partial<DocumentBaseEntity>) {
    Object.assign(this, partial);
  }
}
