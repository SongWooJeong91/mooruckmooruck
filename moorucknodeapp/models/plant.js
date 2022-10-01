module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'plant',
		{
			plantType: { type: DataTypes.STRING(100), allowNull: false },
			plantName: { type: DataTypes.STRING(100), allowNull: false },
			wateringCycle: { type: DataTypes.INTEGER(10), allowNull: false },
			nutrientsCycle: { type: DataTypes.INTEGER(10), allowNull: false },
			splitCycle: { type: DataTypes.INTEGER(10), allowNull: false },
			wateringDate: { type: DataTypes.STRING(20), allowNull: true },
			nutrientsDate: { type: DataTypes.STRING(20), allowNull: true },
			splitDate: { type: DataTypes.STRING(20), allowNull: true },
			sunshine: { type: DataTypes.STRING(10), allowNull: true },
			temperature: { type: DataTypes.STRING(10), allowNull: true },
			saleDate: { type: DataTypes.STRING(20), allowNull: true },
			plantImg: { type: DataTypes.STRING(500), allowNull: true },
			plantMemo: { type: DataTypes.STRING(1000), allowNull: true },
		},
		{
			timestamps: true,
			paranoid: true,
			underscored: true,
			charset: 'utf8',
			collate: 'utf8_unicode_ci',
		}
	);
};
