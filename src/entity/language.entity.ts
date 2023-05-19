import { TINYINT } from 'sequelize';
import { Table, Column, Model, DataType, AfterCreate, HasMany,HasOne } from 'sequelize-typescript';

@Table({
    tableName: 'language'
})
export class LanguageTable extends Model<LanguageTable> {
    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    script: string;

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