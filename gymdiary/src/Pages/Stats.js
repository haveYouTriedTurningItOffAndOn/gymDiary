import React, { Component } from "react";
import Table from "../components/Table/Table";
import PieChart from "../components/PieChart/PieChart";
import LineChart from "../components/LineChart/LineChart";
import BarChart from "../components/BarChart/BarChart";
class Stats extends Component {

    render() {
        return (
            <div>
                <div className="column">
                    <div className="level">
                        <div className="box column">
                            Bar
                            </div>
                        <div className="box column ">
                            Line
                            </div>
                    </div>
                    <div className="level">
                        <div className="box column">
                            Pie
                            </div>
                        <div className="box column is-two-thirds ">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Stats;