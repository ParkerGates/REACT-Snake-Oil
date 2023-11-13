import React, { useState} from 'react';
import { useContextData } from '../context/context';
import { FilterForm, SelectSortOptions, StoreItem } from '../interface/interfaces';
import { useParams } from 'react-router-dom';
import { itemData } from '../data/data';
import AppsIcon from '@mui/icons-material/Apps';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TuneIcon from '@mui/icons-material/Tune';
import ShopFilter from '../components/ShopFilter/ShopFilter';
import DisplayItemTile from '../components/DisplayItemTile/DisplayItemTile';
import DisplayItemRow from '../components/DisplayItemRow/DisplayItemRow';
import DisplayItemPopup from '../components/DisplayItemPopup/DisplayItemPopup';
import TransactionHead from '../components/TransactionHead/TranscactionHead';
import { chgOnSm, chgOnVal } from '../utility/screenSize';
import './css/Shop.css';

export default function Shop() {
    const { screenW } = useContextData();
    const { details } = useParams();
    const [orgSort, setOrgSort] = useState<SelectSortOptions>('featured');
    const [orgLayout, setOrgLayout] = useState<"tile"|"row">("tile");
    const [filterForm, setFilterForm] = useState<FilterForm>({
        remedy: [],
        form: [],
        priceMin: undefined,
        priceMax: undefined,
        sales: false,
    });
    const selectedItem = itemData.find((item)=> item.alias === details);

    let itemDataFiltered: StoreItem[] = itemData.filter((item) => {
        let isRemedy = Boolean(filterForm.remedy.filter((f) => f === item.remedy).length) || filterForm.remedy.length === 0;
        let isForm = Boolean(filterForm.form.filter((f) => f === item.form).length) || filterForm.form.length === 0;
        let isPrice = (filterForm.priceMin === undefined || item.price >= filterForm.priceMin) && (filterForm.priceMax === undefined || item.price <= filterForm.priceMax);
        let isSale = filterForm.sales === false || (filterForm.sales === true && item.sale !== false);
        if (isRemedy === true && isForm === true && isPrice === true && isSale === true) { return item }
    });
    const itemDataFilteredNoSort: StoreItem[] = [...itemDataFiltered]


    switch(orgSort) {
        case 'featured':
            itemDataFiltered = itemDataFilteredNoSort;
            break;
        case 'alphabet':
            itemDataFiltered.sort((a,b)=> (a.name > b.name) ? 1 : -1);
            break;
        case 'rated':
            itemDataFiltered.sort((a,b)=> (b.stars - a.stars));
            break;
        case 'priceLow':
            itemDataFiltered.sort((a,b)=> (a.price - b.price));
            break;
        case 'priceHigh':
            itemDataFiltered.sort((a,b)=> (b.price - a.price));
            break;
        default:
            itemDataFiltered = itemDataFilteredNoSort;
    }


    const openFilter = () => {
        document.getElementById("background_nav").classList.add("side_nav_background_open");
        document.getElementById('shp_filter').classList.add("shp_filter_open");
    }

    const closeFilter = () => {
        document.getElementById("background_nav").classList.remove("side_nav_background_open");
        document.getElementById('shp_filter').classList.remove("shp_filter_open");
    }

    return(
        <div className="shp_cont">
            <div id="shp_filter" className="shp_filter">
                <ShopFilter form={filterForm} setForm={setFilterForm}/>
            </div>

            <div className='shp_display'>
                <div className='shp_display_org'>
                    <div className="shp_display_org_layout_filter">
                        <button
                            onClick={() => {openFilter()}}
                            className="shp_filter_toggle shp_display_org_btn">
                            <TuneIcon
                                fontSize='large'
                                sx={{color:'#696969', fontSize:chgOnSm(screenW,600,'1.8rem','2.2rem')}}/>
                        </button>
                        <button
                            onClick={() => {setOrgLayout("tile")}}
                            className='shp_display_org_btn shp_display_org_btn_layout'>
                            <AppsIcon
                                fontSize='large'
                                sx={{color:chgOnVal(orgLayout,'tile','#696969','#CACACA'), fontSize:chgOnSm(screenW,550,'1.8rem','2.2rem')}}
                            />
                        </button>
                        <button
                            onClick={() => {setOrgLayout("row")}}
                            className='shp_display_org_btn shp_display_org_btn_layout'>
                            <TableRowsIcon
                                fontSize='large'
                                sx={{color:chgOnVal(orgLayout,'row','#696969','#CACACA'), fontSize:chgOnSm(screenW,550,'1.8rem','2.2rem')}}
                            />
                        </button>
                    </div>

                    <div className='shp_display_org_sort'>
                        <span>Sort by</span>
                        <select value={orgSort} onChange={(e)=>{setOrgSort(e.target.value as SelectSortOptions)}}>
                            <option value='featured'>Featured</option>
                            <option value='rated'>Highest Rated</option>
                            <option value='priceLow'>Price: Low - High</option>
                            <option value='priceHigh'>Price: High - Low</option>
                            <option value='alphabet'>Alphabetically</option>
                        </select>
                    </div>
                </div>
                <div className='shp_display_org_hr'></div>

                <div className={(orgLayout === 'tile' || screenW <= 600) ? 'shp_display_tile' : 'shp_display_row'}>
                    { itemDataFiltered.map((item) => {
                        if (orgLayout === "tile" || screenW <= 600) {return <DisplayItemTile key={item.alias} item={item} />}
                        else if (orgLayout === "row") {return <DisplayItemRow key={item.alias} item={item} />}
                    }) }
                </div>
            </div>

            <div className='shp_cart'>
                <TransactionHead />
            </div>

            <DisplayItemPopup item={selectedItem}/>
        </div>
    );
}