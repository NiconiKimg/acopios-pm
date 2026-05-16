/*
  Warnings:

  - You are about to drop the column `cuil` on the `Client` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT,
    "dni" TEXT,
    "phone" TEXT,
    "observations" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Client" ("active", "createdAt", "dni", "id", "lastName", "name", "observations", "phone", "updatedAt") SELECT "active", "createdAt", "dni", "id", "lastName", "name", "observations", "phone", "updatedAt" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_dni_key" ON "Client"("dni");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
