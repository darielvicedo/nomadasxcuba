export function getEquipmentByCategory(category) {
  const data = require('../data/equipment.json');

  return data.filter(function (element) {
    return element.category === category;
  });
}

export function getEquipment() {
  return require('../data/equipment.json');
}

export function getRoutes() {
  return require('../data/routes.json');
}
