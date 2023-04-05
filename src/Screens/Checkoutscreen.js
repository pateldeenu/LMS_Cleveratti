import React, { useState } from "react";
import { Text, View, Image, ScrollView, Modal, KeyboardAvoidingView, TouchableOpacity, TextInput, } from "react-native";
import Styles from '../style/Checkoutscreenstyle';
import IconA from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/MaterialIcons';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import IconS from 'react-native-vector-icons/Entypo';
import style from '../style/SwitalertComponets';
import Button from '../Components/Commonfile/Button';
import { useSelector } from "react-redux";
import IconF from 'react-native-vector-icons/dist/AntDesign';

const Checkoutscreen = (props) => {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	const [modalVisible, setModalVisible] = useState(false);
	const [modalVisibletwo, setModalVisibletwo] = useState(false);
	const [modalVisiblethree, setModalVisiblethree] = useState(false);
	const [Cuponshow, setCuponshow] = useState(0)
	const {navigation} = props;
	return (
		<Container>
			<LinearGradient
				start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
				colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
				<View style={Styles.minstyleviewphotograpgy}>
					<ScrollView
						keyboardShouldPersistTaps="handled"
						contentContainerStyle={{
							width: '100%',
							height: 'auto',
						}}>
						<KeyboardAvoidingView enabled>
							<View style={Styles.minflexview}>
								<View>
									<View style={Styles.minviewsigninscreen}>
										<View style={Styles.flerxrowsettitle}>
											<Text style={Styles.totaltextset}>Total :</Text>
											<Text style={Styles.dolardtextstyle}>$499.09</Text>
										</View>
										<Text style={Styles.promotiontextset}>Promotions</Text>
										{Cuponshow === 0 ?
											null
											: <TouchableOpacity style={Styles.minviewflexset}>
												<View>
													<IconA name="close" size={23} color={'black'} />
												</View>
												<View style={Styles.keeptextflexset}>
													<Text style={Styles.keeplearningtextsety}>KEEPLEARNING</Text>
													<Text>is applied</Text>
												</View>
											</TouchableOpacity>
										}
										<TouchableOpacity style={Styles.flexbuttonset}>
											<View style={Styles.settextinputwidth}>
												<TextInput
													placeholder="Enter Coupon"
													placeholderTextColor={'black'}
													style={Styles.textinputstyle}
												/>
											</View>
											<View style={Styles.setbuttonwidth}>
												<Button buttonStyle={{
													borderTopLeftRadius: 0,
													borderBottomLeftRadius: 0,
													backgroundColor: colorrdata,
													borderColor: colorrdata,
												}} onPress={() => setModalVisiblethree(true)} title="Apply" />
											</View>
										</TouchableOpacity>
										<Text style={Styles.promotiontextset}>3 Courses in cart</Text>
										<View style={Styles.whiteboxwhishlist}>
											<View style={Styles.flexDirectiwhilist}>
												<View>
													<Image style={Styles.imagesetios} resizeMode='cover'
														source={require('../image/homeslider7.png')} />
												</View>
												<View style={Styles.textviewsetwhishlist}>
													<Text style={Styles.textstylebeginners}>Beginners Crystal Reports 2021 & 2022 Totorial Video</Text>
													<Text style={Styles.setreviewstext}>By Infinite Skills, High Quality Tr...</Text>
													<View style={Styles.setstartanddolardtext}>
														<TouchableOpacity style={Styles.stariconview}>
															<Text style={{
																color: colorrdata,
																fontSize: 18,
																marginRight: 15,
																fontWeight: '700'
															}}>$875.00</Text>
															<IconG name="local-offer" size={23} color={colorrdata} />
														</TouchableOpacity>
													</View>
												</View>
											</View>
											<View style={Styles.setbuttontwowidth}>
												<Button buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata, }} title="Bestseller" />
											</View>
											<View style={Styles.setflextextrow}>
												<Text style={Styles.fourpointtext}>4.5</Text>
												<View style={Styles.flexrowiconset}>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
												</View>
												<Text style={Styles.ratingstextstyle}>(676 ratings)</Text>
											</View>
											<Text style={Styles.simpletxtset}>5.5 total hours . 121 lectures . All Levels</Text>
											<View style={Styles.flexbuttonsetstyle}>
												<TouchableOpacity onPress={() => setModalVisible(true)}>
													<Text style={{
														color: colorrdata,
														fontSize: 16,
														marginRight: 15,
														fontWeight: '700',
														marginRight: 30,
													}}>Remove</Text>
												</TouchableOpacity>
												<TouchableOpacity onPress={() => setModalVisibletwo(true)}>
													<Text style={{
														color: colorrdata,
														fontSize: 16,
														marginRight: 15,
														fontWeight: '700'
													}}>Move to Whishilist</Text>
												</TouchableOpacity>
											</View>
										</View>
										<View style={Styles.whiteboxwhishlist}>
											<View style={Styles.flexDirectiwhilist}>
												<View>
													<Image style={Styles.imagesetios} resizeMode='cover'
														source={require('../image/homeslider7.png')} />
												</View>
												<View style={Styles.textviewsetwhishlist}>
													<Text style={Styles.textstylebeginners}>Programming and Frameworks</Text>
													<Text style={Styles.setreviewstext}>By Infinite Skills, High Quality Tr...</Text>
													<View style={Styles.setstartanddolardtext}>
														<View style={Styles.stariconview}>
															<Text style={{
																color: colorrdata,
																fontSize: 18,
																marginRight: 15,
																fontWeight: '700'
															}}>$875.00</Text>
															<IconG name="local-offer" size={23} color={colorrdata} />
														</View>
													</View>
												</View>
											</View>
											<View style={Styles.setbuttontwowidth}>
												<Button title="Bestseller" buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata, }} />
											</View>
											<View style={Styles.setflextextrow}>
												<Text style={Styles.fourpointtext}>4.5</Text>
												<View style={Styles.flexrowiconset}>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
													<IconS
														size={20}
														name="star"
														style={Styles.stariconstyle}
													/>
												</View>
												<Text style={Styles.ratingstextstyle}>(776 ratings)</Text>
											</View>
											<Text style={Styles.simpletxtset}>9.5 total hours . 129 lectures . All Levels</Text>
											<View style={Styles.flexbuttonsetstyle}>
												<TouchableOpacity onPress={() => setModalVisible(true)}>
													<Text style={{
														color: colorrdata,
														fontSize: 16,
														marginRight: 15,
														fontWeight: '700',
														marginRight: 30,
													}}>Remove</Text>
												</TouchableOpacity>
												<TouchableOpacity onPress={() => setModalVisibletwo(true)}>
													<Text style={{
														color: colorrdata,
														fontSize: 16,
														marginRight: 15,
														fontWeight: '700'
													}}>Move to Whishilist</Text>
												</TouchableOpacity>
											</View>
										</View>
										<View>
											<View style={style.centeredView}>
												<Modal
													animationType="slide"
													transparent={true}
													visible={modalVisible}
												>
													<View style={style.setbgcolorgrsay}>
														<View style={style.centeredView}>
															<View style={style.modalView}>
																<View style={style.setroundcenter}>
																	<View style={{
																		borderColor: colorrdata,
																		borderWidth: 3,
																		height: 80,
																		width: 80,
																		borderRadius: 100,
																		flexDirection: 'row',
																		alignContent: 'center',
																		justifyContent: 'center'
																	}}>
																		<IconF style={{
																			color: colorrdata,
																			flexDirection: 'row',
																			justifyContent: 'center',
																			paddingTop: 15,
																		}} name="check" size={45} />
																	</View>
																</View>
																<View style={style.registertextset}>
																	<Text style={style.settext}>Remove Successful</Text>
																</View>
																<View style={style.buttonminview}>
																	<View style={style.setokbutton}>
																		<Button title="Ok"
																			onPress={() => { setModalVisible(!modalVisible) }}
																		/>
																	</View>
																</View>
															</View>
														</View>
													</View>
												</Modal>
											</View>
											<View style={style.centeredView}>
												<Modal
													animationType="slide"
													transparent={true}
													visible={modalVisibletwo}
												>
													<View style={style.setbgcolorgrsay}>
														<View style={style.centeredView}>
															<View style={style.modalView}>
																<View style={style.setroundcenter}>
																	<View style={style.setroundcenter}>
																		<View style={{
																			borderColor: colorrdata,
																			borderWidth: 3,
																			height: 80,
																			width: 80,
																			borderRadius: 100,
																			flexDirection: 'row',
																			alignContent: 'center',
																			justifyContent: 'center'
																		}}>
																			<IconF style={{
																				color: colorrdata,
																				flexDirection: 'row',
																				justifyContent: 'center',
																				paddingTop: 15,
																			}} name="check" size={45} />
																		</View>
																	</View>
																</View>
																<View style={style.registertextset}>
																	<Text style={style.settext}>Moved to Whishilist</Text>
																</View>
																<View style={style.buttonminview}>
																	<View style={style.setokbutton}>
																		<Button title="Ok"
																			onPress={() => { setModalVisibletwo(!modalVisibletwo) }}
																		/>
																	</View>
																</View>
															</View>
														</View>
													</View>
												</Modal>
											</View>
										</View>
										<View>
											<View style={style.centeredView}>
												<Modal
													animationType="slide"
													transparent={true}
													visible={modalVisiblethree}
												>
													<View style={style.setbgcolorgrsay}>
														<View style={style.centeredView}>
															<View style={style.modalView}>
																<View style={style.setroundcenter}>
																	<View style={style.setroundcenter}>
																		<View style={{
																			borderColor: colorrdata,
																			borderWidth: 3,
																			height: 80,
																			width: 80,
																			borderRadius: 100,
																			flexDirection: 'row',
																			alignContent: 'center',
																			justifyContent: 'center'
																		}}>
																			<IconF style={{
																				color: colorrdata,
																				flexDirection: 'row',
																				justifyContent: 'center',
																				paddingTop: 15,
																			}} name="check" size={45} />
																		</View>
																	</View>
																</View>
																<View style={style.registertextset}>
																	<Text style={style.settext}>Applied Successfully</Text>
																</View>
																<View style={style.buttonminview}>
																	<View style={style.setokbutton}>
																		<Button title="Ok"
																			onPress={() => { setCuponshow(1); setModalVisiblethree(!modalVisiblethree) }}
																		/>
																	</View>
																</View>
															</View>
														</View>
													</View>
												</Modal>
											</View>
										</View>
									</View>
								</View>
							</View>
						</KeyboardAvoidingView>
					</ScrollView>
					<View style={Styles.whitecolorsetbgcolor}>
						<Button buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata, }} title="Checkout" onPress={() => navigation.navigate('PaymentScreen')} />
					</View>
				</View>
			</LinearGradient>
		</Container>
	);
};

export default Checkoutscreen;
