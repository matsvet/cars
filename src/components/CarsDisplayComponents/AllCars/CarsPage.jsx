import CarsTable from "../CarsTable/CarsTable";
import style from "./CarsPage.module.css"
import {Button, DatePicker, InputNumber, Select} from "antd";
import {collection, addDoc, getFirestore, getDocs, Timestamp} from "firebase/firestore"
import {db} from "../../../firebase/firebase";
import {useContext, useState} from "react";
import {Context} from "../../../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import TempStore from "../../../tempStore/TempStore";

const {Option} = Select;

const CarsPage = (props) => {
    const {auth, firestore, firebase} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [cars, loading] = useCollectionData(
        firestore.collection('tachki')
    )

    let filteredCars = props.cars
    let carFilter = {
        mark: null,
        model: null,
        minPrice: null,
        maxPrice: null,
        minYear: null,
        maxYear: null,
        city: null,
    }

    const Filter = () => {

        function onMarkChange(value) {
            console.log(`selected ${value}`);
        }

        function onMarkSearch(val) {
            console.log('search:', val);
        }

        function onModelChange(value) {
            console.log(`selected ${value}`);
        }

        function onModelSearch(val) {
            console.log('search:', val);
        }

        function onCityChange(value) {
            console.log(`selected ${value}`);
        }

        function onCitySearch(val) {
            console.log('search:', val);
        }

        function onMinPriceChange(value) {
            console.log(`selected ${value}`);
            carFilter = {
                ...carFilter,
                minPrice: value,
            }
        }

        function onMaxPriceChange(value) {
            console.log(`selected ${value}`);
        }

        function onMinYearChange(date, dateString) {
            console.log(date, dateString);
        }

        function onMaxYearChange(date, dateString) {
            console.log(date, dateString);
        }

        const add = async ({car}) => {
            await firestore.collection('news').add(car)
        }

        const addCars = () => {
            TempStore.news.map(car => add({car}))
        }


        return <div className={style.filterBlock}>
            <div>
                <Select
                    showSearch
                    placeholder="Марка"
                    optionFilterProp="children"
                    onChange={onMarkChange}
                    onSearch={onMarkSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="chevrolet">Chevrolet</Option>
                    <Option value="daewoo">Daewoo</Option>
                    <Option value="lada">LADA (ВАЗ)</Option>
                </Select>
                <Select
                    showSearch
                    placeholder="Модель"
                    optionFilterProp="children"
                    onChange={onModelChange}
                    onSearch={onModelSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    disabled
                >
                    <Option value="Lanos">Lanos</Option>
                    <Option value="Nexia">Nexia</Option>
                    <Option value="2107">2107</Option>
                </Select>
            </div>
            <div>
                <InputNumber
                    placeholder="Цена, от"
                    min={1}
                    max={1000000000}
                    onChange={onMinPriceChange}
                />
                <InputNumber
                    placeholder="Цена, до"
                    min={1}
                    max={1000000000}
                    onChange={onMaxPriceChange}
                />
            </div>
            <div>
                <DatePicker placeholder="Год, от" onChange={onMinYearChange} picker="year"/>
                <DatePicker placeholder="Год, до" onChange={onMaxYearChange} picker="year"/>
            </div>
            <div>
                <Select
                    showSearch
                    placeholder="Город"
                    optionFilterProp="children"
                    onChange={onCityChange}
                    onSearch={onCitySearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="moscow">Москва</Option>
                    <Option value="kyiv">Киев</Option>
                    <Option value="minsk">Минск</Option>
                </Select>
            </div>
            <Button danger onClick={addCars}>
                Очистить
            </Button>
            <Button type="dashed" onClick={() => props.applyFilter(carFilter)}>
                Применить
            </Button>
        </div>
    }


    return <div>
        <div>
            <Filter/>
        </div>
        {loading ? <div>Загруз Очка</div> :
        <CarsTable
            cars={cars}
            changeFavourite={props.changeFavourite}
            changeComparated={props.changeComparated}
        />}
    </div>
}

export default CarsPage;