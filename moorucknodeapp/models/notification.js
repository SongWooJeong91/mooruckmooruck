module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'notification',
		{
			notiType: { type: DataTypes.INTEGER(1), allowNull: false },
			notiContent: { type: DataTypes.STRING(1000), allowNull: false },
			notiStatus: { type: DataTypes.INTEGER(1), allowNull: false },
			notiCheck: { type: DataTypes.INTEGER(1), allowNull: false },
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
