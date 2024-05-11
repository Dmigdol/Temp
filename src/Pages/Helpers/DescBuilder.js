
const newDesc = (obj) => {

  let description = ``

  switch(obj.numDoors) {
    case 'single':
      description += `Single `;
      break;
    case 'double':
      description += `Double `;
      break;
  }
  description += `${obj.width}" x ${obj.height}" `



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

  obj.strikeHeight ? description += `${obj.strikeHeight}" ` : description = description;
  obj.deadBolt === 'on' ? description += `DB ` : description = description;
  obj.fireRating === 'on' ? description += `20min FR ` : description = description;
  obj.handling ? description += `${obj.handling} ` :description = description;
  obj.closer === 'on' ? description += `Closer ` : description = description;

  console.log('desc ', description)
  return (description)
}

export default newDesc;