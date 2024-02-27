export abstract class DocumentBaseEntity {
  /**
   * Register id.
   */
  public id: string;

  /**
   * Creation date of register.
   */
  public createdAt: Date;

  /**
   * Last update date.
   */
  public updatedAt: Date;

  /**
   * Date when register was "soft-deleted" (if not null).
   */
  public deletedAt: Date | null;

  public constructor(partial: Partial<DocumentBaseEntity>) {
    Object.assign(this, partial);
  }
}
