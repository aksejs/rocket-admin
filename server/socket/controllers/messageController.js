const { random } = require('lodash');

module.exports = {
  getCorrectAnswers: (messagePosition = 1) => {
    switch (messagePosition) {
      case 1:
        return ['ок', 'да', 'конечно', 'спрашивай', 'есть', 'какая'];
      case 2:
        return ['подождите', 'не помню', 'где', 'напишите', 'какой', 'счета'];
    }
  },

  getRandomMessage: (messageScenarioType = '') => {
    switch (messageScenarioType) {
      case 'problem':
        return {
          isClient: true,
          type: 'message',
          message: [
            'В общем проблема такая, не могу найти на сколько я последний раз поел в маке..',
            'Есть одна проблемка. Недавно поел в макдональдсе, не могу найти операцию в истории',
            'Дело вот в чем: Давеча поел в ресторане Макдональдс, а в истории не отображается, видимо удалил, я могу где-то увидеть эту операцию?'
          ][random(0, 2)],
          timestamp: (new Date().getTime() / 1000) | 0
        };
      case 'wrong':
        return {
          isClient: true,
          type: 'message',
          message: [
            'Не, это че-то не то. Тут нигде не сказано про макдак.',
            'Я не это имел ввиду',
            'Я ждал другого ответа.'
          ][random(0, 2)],
          timestamp: (new Date().getTime() / 1000) | 0
        };
      case 'correct':
        return {
          isClient: true,
          type: 'message',
          message: [
            'То, что надо, спасибо!',
            'Ого, спасибо за помощь 😎',
            'Спасибо, это именно то, что мне было нужно 😱'
          ][random(0, 2)],
          timestamp: (new Date().getTime() / 1000) | 0
        };
      case 'incorrectMessage':
        return {
          isClient: true,
          type: 'message',
          message: [
            'Может быть у вас просто где-то есть история моих счетов?',
            'Может быть вы можете там сами у себя посмотреть?',
            'Попробуйте проверить у себя, может быть записи где-то остались..'
          ][random(0, 2)],
          timestamp: (new Date().getTime() / 1000) | 0
        };
    }
  }
};
