
const newDesc = (obj) => {
  let description = `${obj.width} x ${obj.height} `
  switch(obj.NumOfDoors) {
    case 'single':
      description += `Single `;
      break;
    case 'double':
      description += `Double `;
      break;
  }

  switch(obj.strike) {
    case 'ASA':
      description += `ASA-str `;
      break;
    case 'T':
      description += `T-str `;
      break;
    case 'Lip':
      description += `Lip-str `;
      break;
    case 'roller':
      description += `Rllr-str `;
      break;
  }

  obj.strikeHeight ? description += `${obj.strikeHeight} ` : description = description;
  obj.deadbolt ? description += `${obj.deadbolt }` : description = description;
  obj.fireRating ? description += `${obj.fireRating} ` : description = description;
  obj.closer ? description += `${obj.closer} ` : description = description;

}

export default newDesc;