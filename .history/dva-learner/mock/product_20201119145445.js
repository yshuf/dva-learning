// 导出数据
module.exports = {
    "GET /api/product": (req, res) => {
        console.log(req)
        const params = req.query;
        console.log(params)
        res.send({ "name": "高粱" })
    }
}