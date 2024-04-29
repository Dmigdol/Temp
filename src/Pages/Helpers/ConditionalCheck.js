
const conditionalChecker = (obj) => {

  /*
    Goal: Check Object for conditional flags
      return id for which conditional needs to be rendered

      example: standard single door 73"h
      Needs: Strike, 3 Hinges, [Closer? Deadbolt? FireRating?]

      Find a way to let Conditionals Renderer know what it needs to render

      Solution: Go through each check and add the correct key to an array,
        then in Conditional render check for 'contans {key}'
  */

  const standard = {
    hinges : {
      tectus : ['340 3D', '540 3D'];
      calroyal : ['CR3D51', 'CR3D62'];
      misc : ['4x4 BUTT HINGE'];
    },
    single : {
      strikes : ['ASA', 'T', 'LIP'];
      handling : ['LH', 'LHr', 'RH', 'RHr']
    },
    double : {
      strikes : 'Roller Head'
    },
    fire : '20 min FR'
  }

  const swing = {
    hinge : {
      tectus : ['340 3D', '540 3D'];
      calroyal : ['CR3D51', 'CR3D62'];
    },
    single : {
      strikes : ['ASA', 'T', 'LIP'];
      handling : ['LH', 'LHr', 'RH', 'RHr']
    },
    double : {
      strikes : 'Roller Head'
    }
  }

  const pivot = {
    hinge : ['DORMA CP440', 'FRITS S1'],
    single : {
      strikes : ['ASA', 'T', 'LIP'];
      handling : ['LH', 'LHr', 'RH', 'RHr']
    },
    double : {
      strikes : 'Roller Head'
    }
  }

  let payload = [];

  if(obj.frame === 'Standard') {
    switch(obj) {
      case (obj.height > 72 && obj.height <= 84):
    }
  }


}

export default conditionalChecker;