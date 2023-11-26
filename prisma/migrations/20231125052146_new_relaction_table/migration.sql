-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userHistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "userHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userHistory" ("action", "id", "timestamp", "userId", "userName") SELECT "action", "id", "timestamp", "userId", "userName" FROM "userHistory";
DROP TABLE "userHistory";
ALTER TABLE "new_userHistory" RENAME TO "userHistory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
