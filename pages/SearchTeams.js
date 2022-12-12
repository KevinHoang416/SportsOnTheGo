import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TextInput } from 'react-native';
import { connect } from "react-redux";
import { SetTeam, FilterTeam, SetSearch } from "../redux/actions/index";
import ProgressIndicator from './components/ProgressIndicator';
import TeamList from './components/TeamList';

function SearchTeams({
  navigation, teamList, filteredTeamList,
  searchState, SetTeam, FilterTeam,
  SetSearch
}) {
  const [loading, setLoading] = useState(false);

  const getTeams = () => {
    setLoading(true);

    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams')
      .then(res => res.json())
      .then(res => {
        SetTeam(res.sports[0].leagues[0].teams);
        FilterTeam(res.sports[0].leagues[0].teams);
      })
      .then(res => (setLoading(false)))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getTeams();
  }, []);

  SetTeam(teamList)

  const filter = (text) => {
    if (text) {
      filteredTeamList = teamList.filter((item) => {
        const itemData = item?.team.displayName
          ? item?.team.displayName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      FilterTeam(filteredTeamList)
      SetSearch(text);
    } else {
      FilterTeam(teamList);
      SetSearch(text)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ProgressIndicator />}

      <TextInput
        style={styles.textinput}
        placeholder={"Search Team"}
        placeholderTextColor={"darkgrey"}
        onChangeText={(text) => filter(text)} value={searchState}
      />

      <FlatList columnWrapperStyle={styles.flatlist}
        data={filteredTeamList} renderItem={({ item }) => (
          <TeamList
            onPress={() => navigation.navigate("Team Information", item)}
            displayName={item?.team.displayName}
            abbreviation={item?.team.abbreviation}
            backgroundColor={item?.team.alternateColor}
            uri={item?.team.logos[0].href}
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: "slategrey"
  },
  flatlist: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
    maxWidth: "100%"
  },
  textinput: {
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth * 3,
    borderColor: "#323639",
    padding: 10,
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
  }
});

const mapDispatch = { SetTeam, FilterTeam, SetSearch };
const mapState = (state) => ({
  teamList: state.searchTeams.teamList,
  filteredTeamList: state.searchTeams.filteredTeamList,
  searchState: state.text,
});

export default connect(mapState, mapDispatch)(SearchTeams);