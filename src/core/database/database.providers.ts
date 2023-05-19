import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../../constants';
import { databaseConfig } from './database.config';
// import { User, ResetPassword } from '../../entitys/index.entity'
import { AuthTable } from 'src/entity/auth.entity';
import { LanguageTable } from '../../entity/language.entity';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case DEVELOPMENT:
                config = databaseConfig.development;
                break;
            case TEST:
                config = databaseConfig.test;
                break;
            case PRODUCTION:
                config = databaseConfig.production;
                break;
            default:
                config = databaseConfig.development;
        }
        try{
            const sequelize = new Sequelize({...config, 
                logging: false,
                logQueryParameters: false
            });
            sequelize.addModels([AuthTable,LanguageTable]);
            // if(process.env.ALTER_TABLES == 'true'){
                await sequelize.sync({ alter: true });
            // }else
            return sequelize;
        }catch(e){
            console.log(e)
        }
    },
}];