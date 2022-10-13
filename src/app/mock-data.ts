import { todoListElements } from "./models/todo-list-elements.model";
import { singletask } from "./models/todo-list-singletask-model";

//a way to simulate input from the rest service

var single:singletask = new singletask("1","Arbeiten","lorem ipsum",true);

var single2:singletask = new singletask("2","Noch mehr Arbeiten","According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",true);

var single3:singletask = new singletask("1","Wochenende","Bavaria ipsum dolor sit amet hod heitzdog abfieseln dahoam ozapfa hawadere midananda. Pfundig in da heitzdog nackata Zwedschgndadschi so heitzdog gscheid hea hawadere midananda: No Leonhardifahrt resch kumm geh auszutzeln Prosd aba Meidromml da Kini hoggd: Hoggd wo hi gar nia need Steckerleis in da, liberalitas Bavariae ned woar is Xaver nix Gwiass woass ma ned. Im Beidl barfuaßat jo mei, bittschön boarischer gscheid Oachkatzlschwoaf hogg ma uns zamm Deandlgwand.",true);

export const TaskList:singletask[]= [
    single,
    single2,
    single3
]