"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardMetrics = void 0;
const client_1 = require("../../prisma/generated/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new client_1.PrismaClient({
    adapter,
});
const getDashboardMetrics = async (req, res) => {
    try {
        const popularProducts = await prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity: "desc",
            },
        });
        const salesSummary = await prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });
        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });
        const expenseSummary = await prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc",
            },
        });
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => (Object.assign(Object.assign({}, item), { amount: item.amount.toString() })));
        res.json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
        });
    }
    catch (error) {
        console.error("Dashboard Error:", error);
        res.status(500).json({
            message: "Error retrieving dashboard metrics",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.getDashboardMetrics = getDashboardMetrics;
