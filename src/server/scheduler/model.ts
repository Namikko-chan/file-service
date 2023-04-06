import { Column, DataType, Model, Table, } from 'sequelize-typescript';
import { DataTypes, } from 'sequelize';
import { getUUID, } from '../utils';
import { SchedulerStatus, } from './enum';

@Table({
	schema: 'logs',
	timestamps: false,
})
export class SchedulerTask extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: () => getUUID(),
	})
	override id!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		name!: string;

	@Column({
		type: DataType.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	})
		startedAt!: string;

	@Column({
		type: DataType.DATE,
		allowNull: true,
	})
		finishedAt!: string;

	@Column({
		type: DataType.ENUM(...Object.values(SchedulerStatus)),
		allowNull: false,
		defaultValue: SchedulerStatus.Started,
	})
		status!: SchedulerStatus;

	@Column({
		type: DataType.TEXT,
		allowNull: true,
	})
		error!: unknown;
}