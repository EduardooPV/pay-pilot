import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Carousel from "react-native-intro-carousel";

export default function Intro() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Carousel
        data={[
          {
            key: "1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec eratLorem.",
            image: require("../assets/slide01.png"),
          },
          {
            key: "2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec eratLorem.",
            image: require("../assets/slide02.png"),
          },
          {
            key: "3",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec eratLorem.",
            image: require("../assets/slide03.png"),
          },
          {
            key: "4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec eratLorem.",
            image: require("../assets/slide04.png"),
          },
        ]}
        paginationConfig={{
          color: "#85a2f7ab",
          activeColor: "#245BFF",
        }}
        buttonsConfig={{
          disabled: true,
          skip: { label: "Pular", textStyle: { color: "#000" } },
        }}
        onPressSkip={() => navigate("rota" as never)}
        renderItem={({ item, index }, goToSlide) =>
          index % 2 === 0 ? (
            <View className="w-screen px-4 py-[110px] flex-1 items-center ">
              <View className="flex-1 h-full w-full items-center justify-center gap-y-6">
                <Image source={item.image} className="w-full" />
                <Text className="w-full  text-justify text-paragraph2 leading-paragraph2">
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-full px-[10px] py-[20px] bg-primary300 rounded-lg flex items-center justify-center"
                onPress={() => goToSlide(index + 1)}
              >
                <Text className=" text-neutral-50 text-paragraph2 font-bold">
                  Próximo
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            ((
              <View className="w-screen px-4 py-[110px] flex-1 items-center ">
                <View className="flex-1 flex h-full w-full items-center justify-center gap-y-6">
                  <Text className="w-full text-justify text-paragraph2 leading-paragraph2">
                    {item.description}
                  </Text>
                  <Image source={item.image} className="w-full" />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  className="w-full px-[10px] py-[20px] bg-primary300 rounded-lg flex items-center justify-center"
                  onPress={() =>
                    index === 3
                      ? navigate("rota" as never)
                      : goToSlide(index + 1)
                  }
                >
                  <Text className=" text-neutral-50 text-paragraph2 font-bold">
                    {index === 3 ? "Finalizar" : "Próximo"}
                  </Text>
                </TouchableOpacity>
              </View>
            ) as any)
          )
        }
      />
    </View>
  );
}
