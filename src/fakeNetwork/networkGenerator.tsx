interface Host {
  ip: string
}

interface Switch {

}

interface MainSwitch {

}

interface StorageDevice {

}

interface External {

}

interface NetworkStarter

type NetworkNode = External | MainSwitch | StorageDevice | Switch | Host

/* Make it flat dude... */

type Network = Array<NetworkNode | Network>

function generateNetwork(): Network {
  // const starter: [External, [MainSwitch, StorageDevice, []]] =
}
