module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'diary',
		{
			title: { type: DataTypes.STRING(100), allowNull: false },
			content: { type: DataTypes.TEXT, allowNull: false },
			diaryImg: { type: DataTypes.STRING(500), allowNull: true },
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
