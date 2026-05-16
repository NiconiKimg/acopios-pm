-- CreateIndex
CREATE INDEX "Movement_workId_idx" ON "Movement"("workId");

-- CreateIndex
CREATE INDEX "Movement_type_idx" ON "Movement"("type");

-- CreateIndex
CREATE INDEX "Movement_date_idx" ON "Movement"("date");

-- CreateIndex
CREATE INDEX "MovementItem_movementId_idx" ON "MovementItem"("movementId");

-- CreateIndex
CREATE INDEX "MovementItem_productId_idx" ON "MovementItem"("productId");

-- CreateIndex
CREATE INDEX "PriceHistory_productId_idx" ON "PriceHistory"("productId");

-- CreateIndex
CREATE INDEX "PriceHistory_date_idx" ON "PriceHistory"("date");

-- CreateIndex
CREATE INDEX "Stockpile_workId_idx" ON "Stockpile"("workId");

-- CreateIndex
CREATE INDEX "Stockpile_productId_idx" ON "Stockpile"("productId");

-- CreateIndex
CREATE INDEX "Stockpile_date_idx" ON "Stockpile"("date");

-- CreateIndex
CREATE INDEX "Work_clientId_idx" ON "Work"("clientId");
