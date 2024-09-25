export class Dependency {
  static dependenciesList = {};

  static add(name, dependency) {
    if (name in this.dependenciesList) {
      throw new Error(`Dependency ${name} already exists.`);
    }

    this.dependenciesList[name] = dependency;
  }

  static get(name) {
    if (!(name in this.dependenciesList)) {
      throw new Error(`Dependency ${name} does not exist.`);
    }

    let dependency = this.dependenciesList[name];
    if (typeof dependency === 'function') {
      dependency = dependency();
    }

    return dependency;
  }
}