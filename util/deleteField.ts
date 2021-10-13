export default (data: any, field: string[]) => {
    if (field.length > 0) {
        let obj = {}
        field.forEach((v) => {
            data[v] = 'xx.xx.xxx_xx.x'
        })
        for (let i in data) {
            if (data[i] != 'xx.xx.xxx_xx.x') {
                obj = { ...obj, [i]: data[i] }
            }
        }
        return obj
    }
    return data
}