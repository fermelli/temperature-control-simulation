import { child, get, push, ref, set } from 'firebase/database';
import { createStore } from 'vuex';
import db from './firebase';
import { uuid } from './utils';

const store = createStore({
	state() {
		return {
			id: null,
			heaterTemperature: 50.0,
			maximumTemperature: 30.0,
			simulationTime: 20,
			roomTemperature: 0.0,
			constantK: 0.067,
			currentTemperature: 0.0,
			currentTime: 0,
			turnOnVentilator: false,
			timeOn: 0,
			timeFrame: 250,
			timeGreen: 0,
			timeYellow: 0,
			timeRed: 0,
			simulations: {},
		};
	},
	mutations: {
		updateHeaterTemperature(state, heaterTemperature) {
			state.heaterTemperature = heaterTemperature;
		},
		updateMaximumTemperature(state, maximumTemperature) {
			state.maximumTemperature = maximumTemperature;
		},
		updateSimulationTime(state, simulationTime) {
			state.simulationTime = simulationTime;
		},
		updateRoomTemperature(state, roomTemperature) {
			state.currentTemperature = roomTemperature;
			state.roomTemperature = roomTemperature;
		},
		updateConstantK(state, constantK) {
			state.constantK = constantK;
		},
		updateCurrentTemperature(state, currentTemperature) {
			state.currentTemperature = currentTemperature;
		},
		updateCurrentTime(state, currentTime) {
			state.currentTime = currentTime;
		},
		updateTurnOnVentilator(state, turnOnVentilator) {
			state.turnOnVentilator = turnOnVentilator;
		},
		updateTimeOn(state, timeOn) {
			state.timeOn = timeOn;
		},
		updateTimeFrame(state, timeFrame) {
			state.timeFrame = timeFrame;
		},
		resetSimulation(state) {
			state.heaterTemperature = 50.0;
			state.maximumTemperature = 30.0;
			state.simulationTime = 20;
			state.roomTemperature = 0.0;
			state.constantK = 0.067;
			state.currentTemperature = 0.0;
			state.currentTime = 0;
			state.turnOnVentilator = false;
			state.timeOn = 0;
			state.timeFrame = 250;
			state.timeGreen = 0;
			state.timeYellow = 0;
			state.timeRed = 0;
		},
		updateTimeGreen(state, currentTime) {
			state.timeGreen = currentTime;
		},
		updateTimeYellow(state, currentTime) {
			state.timeYellow = currentTime;
		},
		updateTimeRed(state, currentTime) {
			state.timeRed = currentTime;
		},
		saveSimulation(state, id) {
			state.id = id;
			console.log('guardado ' + id);
		},
		saveMeasurement() {
			console.log('medida guardada');
		},
		saveFinalData() {
			console.log('datos finales');
		},
		getSimulations(state, simulations) {
			state.simulations = simulations;
		},
	},
	actions: {
		updateHeaterTemperature({ commit }, heaterTemperature) {
			commit('updateHeaterTemperature', heaterTemperature);
		},
		updateMaximumTemperature({ commit }, maximumTemperature) {
			commit('updateMaximumTemperature', maximumTemperature);
		},
		updateSimulationTime({ commit }, simulationTime) {
			commit('updateSimulationTime', simulationTime);
		},
		updateRoomTemperature({ commit }, roomTemperature) {
			commit('updateRoomTemperature', roomTemperature);
		},
		updateConstantK({ commit }, constantK) {
			commit('updateConstantK', constantK);
		},
		updateCurrentTemperature({ commit }, currentTemperature) {
			commit('updateCurrentTemperature', currentTemperature);
		},
		updateCurrentTime({ commit }, currentTime) {
			commit('updateCurrentTime', currentTime);
		},
		updateTurnOnVentilator({ commit }, turnOnVentilator) {
			commit('updateTurnOnVentilator', turnOnVentilator);
		},
		updateTimeOn({ commit }, timeOn) {
			commit('updateTimeOn', timeOn);
		},
		updateTimeFrame({ commit }, timeFrame) {
			commit('updateTimeFrame', timeFrame);
		},
		resetSimulation({ commit }) {
			commit('resetSimulation');
		},
		updateTimeGreen({ commit, state }) {
			const reference = ref(db, 'simulations/' + state.id + '/timeGreen');
			let currentTime = state.currentTime;
			set(reference, currentTime);
			commit('updateTimeGreen', currentTime);
		},
		updateTimeYellow({ commit, state }) {
			const reference = ref(
				db,
				'simulations/' + state.id + '/timeYellow',
			);
			let currentTime = state.currentTime;
			set(reference, currentTime);
			commit('updateTimeYellow', currentTime);
		},
		updateTimeRed({ commit, state }) {
			const reference = ref(db, 'simulations/' + state.id + '/timeRed');
			let currentTime = state.currentTime;
			set(reference, currentTime);
			commit('updateTimeRed', currentTime);
		},
		saveSimulation({ commit, state }) {
			let id = uuid();
			const reference = ref(db, 'simulations/' + id);
			const data = {
				heaterTemperature: state.heaterTemperature,
				maximumTemperature: state.maximumTemperature,
				simulationTime: state.simulationTime,
				roomTemperature: state.roomTemperature,
				constantK: state.constantK,
				finalTemperature: 0,
				finalTime: 0,
				timeOn: state.timeOn,
				timeFrame: state.timeFrame,
				timeGreen: state.timeGreen,
				timeYellow: state.timeYellow,
				timeRed: state.timeRed,
				timestamp: Date.now(),
			};
			set(reference, data);
			commit('saveSimulation', id);
		},
		saveMeasurement({ commit, state }) {
			const measurementsListRef = ref(
				db,
				'simulations/' + state.id + '/measurements',
			);
			const newMeasurementRef = push(measurementsListRef);

			set(newMeasurementRef, {
				currentTemperature: state.currentTemperature,
				currentTime: state.currentTime,
				turnOnVentilator: state.turnOnVentilator,
				timeOn: state.timeOn,
			});

			commit('saveMeasurement');
		},
		saveFinalData({ commit, state }) {
			const reference1 = ref(
				db,
				'simulations/' + state.id + '/finalTemperature',
			);
			const reference2 = ref(
				db,
				'simulations/' + state.id + '/finalTime',
			);
			const reference3 = ref(db, 'simulations/' + state.id + '/timeOn');

			let currentTemperature = state.currentTemperature;
			let currentTime = state.currentTime;
			let timeOn = state.timeOn;

			set(reference1, currentTemperature);
			set(reference2, currentTime);
			set(reference3, timeOn);

			commit('saveFinalData');
		},
		getSimulations({ commit }) {
			const dbRef = ref(db, 'simulations');
			get(child(dbRef, '/'))
				.then((snapshot) => {
					if (snapshot.exists()) {
						commit('getSimulations', snapshot.val());
					} else {
						console.log('No data available');
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
});

export default store;
