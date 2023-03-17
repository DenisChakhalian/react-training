function PetInfo({animal, old, hasPet}) {
    return <h1>
        {hasPet ?
            `My ${animal} is ${old}yo` :
            "You dont have an animal"}
    </h1>
}

export default PetInfo