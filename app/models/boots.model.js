module.exports = (sequelize, Sequelize)=> {
    const boots = sequelize.define("boots", {
        name: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        cool: {
            type: Sequelize.BOOLEAN
        }
    });
    return boots;
};