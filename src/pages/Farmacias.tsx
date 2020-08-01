import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  WrapperTopModal,
  HeaderModal,
  ButtonCloseModal,
  BodyModal,
  ImagemList,
  ImagemModalLogo,
  Detalhes,
  DetalheTxt,
  DetalheName,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Detalhesfarmacia from "../pages/Detalhesfarmacia";

interface Farmacia {
  _id: string;
  name: string;
  urllogo: string;
  phone: string;
  address: string;
}

const Farmacias: React.FC = () => {
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = (farmacia: Farmacia) => {
    setIsOpenModal(true);
    setSelectedOption(farmacia._id);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    fetch("https://api.lopscorp.com/farmacias").then((response) => {
      response.json().then((data) => {
        setFarmacias(data);
      });
    });
  }, []);
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          {farmacias.map((farmacia) => (
            <TouchableOpacity
              key={farmacia._id}
              onPress={() => handleOpenModal(farmacia)}
            >
              <View style={styles.member}>
                <ImagemList source={{ uri: farmacia.urllogo }} />
                <View>
                  <Text style={styles.name}>{farmacia.name}</Text>
                  <Text>{farmacia.address[2]}</Text>
                  <Text>{farmacia.phone}</Text>
                </View>
              </View>

              {selectedOption === farmacia._id ? (
                <Modal visible={isOpenModal} animationType="slide">
                  <WrapperTopModal>
                    <HeaderModal>
                      <ButtonCloseModal
                        style={{ marginTop: 30 }}
                        onPress={() => handleCloseModal()}
                      >
                        <AntDesign
                          name="doubleleft"
                          size={30}
                          color="#4b5c6b"
                        />
                      </ButtonCloseModal>
                    </HeaderModal>
                    <BodyModal>
                      <ImagemModalLogo source={{ uri: farmacia.urllogo }} />
                      <Detalhes>
                        <DetalheName>{farmacia.name}</DetalheName>

                        <DetalheTxt>
                          <MaterialCommunityIcons
                            name="phone-classic"
                            size={20}
                          />
                          Telefone: {farmacia.phone}
                        </DetalheTxt>
                        <DetalheTxt>
                          <MaterialIcons name="location-on" size={24} />
                          Endereço: {farmacia.address[0]}, {farmacia.address[1]}
                        </DetalheTxt>
                        <DetalheTxt>
                          <MaterialIcons name="location-on" size={24} />
                          Bairro: {farmacia.address[2]}
                        </DetalheTxt>
                        
                      </Detalhes>
                    </BodyModal>
                  </WrapperTopModal>
                </Modal>
              ) : null}
            </TouchableOpacity>
          ))}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    marginBottom: 8,
    color: "#4b5c6b",
    fontSize: 24,
    display: "flex",
  },
});

export default Farmacias;
