export class UserMockup {
  static list = [
    {
      uuid: 'ff39511d-a77c-49df-936f-1234567890ab',
      username: 'Admin',
      displayName: 'Administrator',
      hashedPassword: '$2b$10$5UmYGGeKzb9L0PNtSwQIz.8sdRvKWGG9pnQ4WR5Jzk20SwsOEtQBW' // Este es solo un ejemplo, asegurate de que sea un hash valido
    },
    {
      uuid: 'b4f64d24-610d-46d5-92e7-1234567890ab',
      username: 'Pedro',
      displayName: 'Pedro pe',
      hashedPassword: '$2b$10$FUfxu' // Este es solo un ejemplo, asegurate de que sea un hash valido
    },
  ];

  async getList(filters, options) {
    const result = [];

    if (filters) {
      for (const item of UserMockup.list) {
        let includeItem = true;

        for (const filterName in filters) {
          const filterValue = filters[filterName];
          if (item[filterName] != filterValue) {
            includeItem = false;
            break;
          }
        }

        if (includeItem) {
          result.push(item);
        }
      }
    } else {
      result.push(...UserMockup.list);
    }

    if (options?.skip) {
      result.splice(0, options.skip);
    }

    if (options?.limit) {
      result.splice(options.limit, result.length - options.limit);
    }

    return result;
  }

  create(data) {
    UserMockup.list.push(data);
  }
}