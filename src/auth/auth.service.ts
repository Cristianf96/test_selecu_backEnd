import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as moment from 'moment';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = {
            userId: user.userId, username: user.username,
            expiresAt: moment().add('1', 'h').format('YYYY-MM-DD HH:mm'),
            initialAt: moment().format('YYYY-MM-DD HH:mm')
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
            data: payload
        };
    }
}
