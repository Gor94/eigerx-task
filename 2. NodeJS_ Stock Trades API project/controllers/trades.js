const Trade = require('../models/trades');

const createTrade = async (req, res) => {
    try {
        const { type, user_id, symbol, shares, price, timestamp } = req.body;
        if (!['buy', 'sell'].includes(type) || shares < 1 || shares > 100) {
            return res.status(400).send('Invalid input');
        }

        const trade = await Trade.create({ type, user_id, symbol, shares, price, timestamp });
        res.status(201).json(trade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllTrades = async  (req, res) => {
    try {
        const { type, user_id } = req.query;
        const where = {};

        if (type) where.type = type;
        if (user_id) where.user_id = user_id;

        const trades = await Trade.findAll({ where, order: [['id', 'ASC']] });
        res.status(200).json(trades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getTradeById = async (req, res) => {
    try {
        const trade = await Trade.findByPk(req.params.id);
        if (trade) {
            res.status(200).json(trade);
        } else {
            res.status(404).send('ID not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const handleInvalidMethods = (req, res) => {
    res.status(405).send('Method not allowed');
};

module.exports = {
    createTrade,
    getAllTrades,
    getTradeById,
    handleInvalidMethods
}