// (() => {

//     // No aplicando el principio de responsabilidad única

//     type Gender = 'M'|'F';

//     class Person {
//         constructor(
//             public name: string, 
//             public gender: Gender, 
//             public birthdate: Date
//         ){}
//     }


//     class User extends Person {

//         public lastAccess: Date;

//         constructor(
//             public email: string,
//             public role: string,
//             name: string,
//             gender: Gender,
//             birthdate: Date,
//         ) {
//             super( name, gender, birthdate );
//             this.lastAccess = new Date();
//         }

//         checkCredentials() {
//             return true;
//         }
//     }


//     class UserSettings extends User {
//         constructor(
//             public workingDirectory: string,
//             public lastOpenFolder  : string,
//             email                  : string,
//             role                   : string,
//             name                   : string,
//             gender                 : Gender,
//             birthdate              : Date
//         ) {
//             super(email, role, name, gender, birthdate );
//         }
//     }


//     const userSettings = new UserSettings(
//         '/usr/home',
//         '/home',
//         'fernando@google.com',
//         'Admin',
//         'Fernando',
//         'M',
//         new Date('1985-10-21')
//     );

//     console.log({ userSettings });


// })();

/////////////////////// Refactor 

(() => {

    // aplicando el principio de responsabilidad única
    //  ninguna clase hereda otra clase padre y se usan interfaces 

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {

        public lastAccess: Date;
        public email: string;
        public role: string;


        constructor({ email, role }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingsProps) {

            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
        }
    }


    const userSettings = new UserSettings(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home',
            email: 'fernando@google.com',
            role: 'Admin',
            name: 'Fernando',
            gender: 'M',
            birthdate: new Date('1985-10-21')
        }
    );

    console.log({ userSettings });
    console.log( userSettings.user.checkCredentials() )


})();