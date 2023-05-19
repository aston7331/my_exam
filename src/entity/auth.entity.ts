
import { TINYINT } from 'sequelize';
import { Table, Column, Model, DataType, AfterCreate, HasMany,HasOne } from 'sequelize-typescript';

@Table({
    tableName: 'auth'
})
export class AuthTable extends Model<AuthTable> {
    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    device_token: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue:"-"
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue:"-"
    })
    isp: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        defaultValue:"-"
    })
    ip: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    created_by: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    updated_by: number;
}
