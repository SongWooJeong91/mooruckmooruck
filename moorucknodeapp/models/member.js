module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'member',
		{
			email: {
				type: DataTypes.STRING(20),
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING(200),
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			phone: {
				type: DataTypes.STRING(20),
				allowNull: false,
				unique: true,
			},
			mphoto: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			usertype: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
			},
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
