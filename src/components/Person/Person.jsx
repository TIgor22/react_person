export const Person = ({ person }) => {
  const name = <h2 className="Person__name">{`My name is ${person.name}`}</h2>;
  let age;
  let partner;

  if (person.age) {
    age = <p className="Person__age">{`I am ${person.age}`}</p>;
  }

  if (!person.isMarried) {
    partner = <p className="Person__partner">I am not married</p>;
  }

  if (person.isMarried) {
    if (person.sex === 'm') {
      partner = (
        <p className="Person__partner">{`${person.partnerName} is my wife`}</p>
      );
    } else {
      partner = (
        <p className="Person__partner">{`${person.partnerName} is my husband`}</p>
      );
    }
  }

  return (
    <section className="Person">
      {name}
      {age}
      {partner}
    </section>
  );
};
