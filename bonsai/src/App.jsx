import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

function App() {
    return(
        <>
            <Header />
            <Card image="src/assets/images/serissa.webp" name="Serissa" description="The Serissa (Serissa foetida), also known as the Snow Rose or Tree of a Thousand Stars, is a popular choice for bonsai enthusiasts. Native to Southeast Asia, this evergreen shrub is appreciated for its tiny, star-shaped white flowers and small, dark green leaves. The Serissa bonsai is known for its delicate appearance and the ability to develop a dense canopy, creating an impression of a miniature, well-proportioned tree."/>
            <Card image="src/assets/images/carmona.webp" name="Carmona" description="Carmona retusa, commonly known as the Fukien tea tree, is a popular species for bonsai cultivation. This evergreen shrub is native to Southeast Asia and is characterized by its small, dark green leaves, which feature a glossy texture. The Fukien tea tree is valued for its ability to develop a thick trunk and intricate root system, making it well-suited for the art of bonsai."/>
            <Card image="src/assets/images/sageretiathea.webp" name="Sageretia Thea" description="Sageretia thea, commonly known as Chinese Bird Plum or Chinese Sweet Plum, is a species of flowering plant in the family Rhamnaceae. It is a small evergreen shrub native to Southeast Asia and China. While not as well-known as some other species, Sageretia thea is occasionally used in bonsai cultivation due to its fine leaves and small berries."/>
            <Card image="src/assets/images/ulmus.webp" name="Ulmus" description="Ulmus is a genus of deciduous trees commonly known as elms. These trees are valued for their attractive, serrated leaves and often graceful, vase-like shape. The genus includes a variety of species, and some of them are used in bonsai cultivation."/>
            <Card image="src/assets/images/ficusretusa.webp" name="Ficus Retusa" description="Ficus retusa, commonly known as the Chinese Banyan or Ficus microcarpa, is a popular species for bonsai enthusiasts. Native to Southeast Asia, this evergreen tree is valued for its small, glossy leaves, aerial roots, and an ability to develop a thick trunk. The Ficus retusa bonsai is known for its adaptability, making it suitable for both indoor and outdoor cultivation."/>
            <Footer />
        </>
    )
}

export default App