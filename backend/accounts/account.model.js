const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        passwordHash: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
        verificationToken: { type: DataTypes.STRING },
        verified: { type: DataTypes.DATE },
        status: { 
            type: DataTypes.STRING, 
            allowNull: false,
            defaultValue: 'Pending'
        },
        isVerified: {
            type: DataTypes.VIRTUAL,
            get() { return !!this.verified; }
        }
    };

    return sequelize.define('Account', attributes);
}