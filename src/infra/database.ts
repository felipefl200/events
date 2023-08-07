import mongoose from 'mongoose'

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://felipefl200:vFZrw1bgnRFV7zNA@cluster0.t7jip.mongodb.net/heroi')
        console.log('Connect database success 🚀');
        
    } catch (error) {
        console.log(error);

    }
}