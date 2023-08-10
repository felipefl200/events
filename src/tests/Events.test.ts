import request from 'supertest'
import path from 'path'
import { App } from '../app'
const app = new App()
const express = app.app
describe('Event test', () => {
  let file = path.resolve(__dirname, '..', 'MockImgs', 'bannerPq.jpg')
    it('/POST Event', async () => {
    const event = {
      title: 'Jorge e Matheus',
      price: [{ sector: 'Pista', amount: '35' }],
      categories: ['Show'],
      description: 'Descrição do evento',
      city: 'Porto Alegre',
      location: {
        latitude: '-29.9739781',
        longitude: '-51.1973867',
      },
      coupons: [],
      date: new Date(),
      participants: [],
    };
    const response = await request(express)
      .post('/events')
      .field('title', event.title)
      .field('description', event.description)
      .field('city', event.city)
      .field('coupons', event.coupons)
      .field('location[latitude]', event.location.latitude)
      .field('location[longitude]', event.location.longitude)
      .field('price[sector]', event.price[0].sector)
      .field('price[amount]', event.price[0].amount)
      .attach('banner', path.resolve(__dirname, '..', 'MockImgs', 'bannerPq.jpg'))
      .attach('flyers', path.resolve(__dirname, '..', 'MockImgs', 'flyer1Pq.jpg'))
      .attach('flyers', path.resolve(__dirname, '..', 'MockImgs', 'flyer2Pq.jpg'))
    if (response.error) {
      console.log('Events.test.ts:35', response.error);
    }
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Evento criado com sucesso.' })
  })
})