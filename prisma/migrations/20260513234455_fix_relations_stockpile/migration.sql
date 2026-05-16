/*
  Warnings:

  - You are about to drop the column `productId` on the `Movement` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Movement` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Stockpile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workId" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "price" REAL NOT NULL,
    "withdrawn" REAL NOT NULL DEFAULT 0,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observations" TEXT,
    CONSTRAINT "Stockpile_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Stockpile_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MovementItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movementId" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "MovementItem_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "Movement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MovementItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "amount" REAL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workId" INTEGER NOT NULL,
    "withdrawerId" INTEGER,
    "observations" TEXT,
    CONSTRAINT "Movement_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Movement_withdrawerId_fkey" FOREIGN KEY ("withdrawerId") REFERENCES "Withdrawer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Movement" ("amount", "date", "id", "observations", "type", "withdrawerId", "workId") SELECT "amount", "date", "id", "observations", "type", "withdrawerId", "workId" FROM "Movement";
DROP TABLE "Movement";
ALTER TABLE "new_Movement" RENAME TO "Movement";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
